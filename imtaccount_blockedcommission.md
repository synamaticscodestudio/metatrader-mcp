# BlockedCommission (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ BlockedCommission | [](imtaccount_somargin.md "SOMargin") [](imtaccount_blockedprofit.md "BlockedProfit") |
| --- | --- | --- |
| --- | --- |

IMTAccount::BlockedCommission
Get the amount of the standard commission locked on the account, which has been accumulated during the day/month.
C++
double IMTAccount::BlockedCommission() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.BlockedCommission()  
---  
Return Value
The amount of the standard commission locked on the account.
Note
If standard commission ([IMTConCommission::COMM_STANDARD](imtconcommission_enum.htm#encommmode)) is charged in the [IMTConCommission::COMM_CHARGE_DAILY or IMTConCommission::COMM_CHARGE_MONTHLY](imtconcommission_enum.htm#encommchargemode)mode, the commission amount for trade operations is blocked on the account during one month or day and is accumulated in the BlockedCommission field. At the end of the day/month, the accumulated amount is debited from the account in a separate balance operation (a deal of type [DEAL_COMMISSION_DAILY or DEAL_COMMISSION_MONTHLY](imtdeal_enum.htm#endealaction)). After that the value of the BlockedCommission field is reset.
IMTAccount::BlockedCommission
Set the amount of the standard commission locked on the account, which has been accumulated during the day/month.
C++
MTAPIRES IMTAccount::BlockedCommission( const double commission // The amount of commission locked )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.BlockedCommission( double commission // The amount of commission locked )  
---  
Parameters
commission
[in] The amount of the standard commission locked on the account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If standard commission ([IMTConCommission::COMM_STANDARD](imtconcommission_enum.htm#encommmode)) is charged in the [IMTConCommission::COMM_CHARGE_DAILY or IMTConCommission::COMM_CHARGE_MONTHLY](imtconcommission_enum.htm#encommchargemode)mode, the commission amount for trade operations is blocked on the account during one month or day and is accumulated in the BlockedCommission field. At the end of the day/month, the accumulated amount is debited from the account in a separate balance operation (a deal of type [DEAL_COMMISSION_DAILY or DEAL_COMMISSION_MONTHLY](imtdeal_enum.htm#endealaction)). After that the value of the BlockedCommission field is reset.