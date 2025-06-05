use anchor_lang::prelude::*;

declare_id!("T7vzu9V9N5mrto56wDGZTAX84m5c9tepSzbhyJeycrm"); // placeholder

#[program]
pub mod sol_airdrop {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        ctx.accounts.state.authority = *ctx.accounts.authority.key;
        Ok(())
    }

    pub fn airdrop(ctx: Context<Airdrop>, amount: u64) -> Result<()> {
        let ix = anchor_lang::solana_program::system_instruction::transfer(
            &ctx.accounts.authority.key(),
            &ctx.accounts.recipient.key(),
            amount,
        );
        anchor_lang::solana_program::program::invoke(
            &ix,
            &[
                ctx.accounts.authority.to_account_info(),
                ctx.accounts.recipient.to_account_info(),
            ],
        )?;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, seeds = [b"state"], bump, payer = authority, space = 8 + 32)]
    pub state: Account<'info, State>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Airdrop<'info> {
    #[account(mut, has_one = authority)]
    pub state: Account<'info, State>,
    #[account(mut)]
    pub authority: Signer<'info>,
    /// CHECK: No need to validate recipient
    #[account(mut)]
    pub recipient: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct State {
    pub authority: Pubkey,
}

