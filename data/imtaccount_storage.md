# Storage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Storage | [](imtaccount_profit.md "Profit") [](imtaccount_commission.md "Commission") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Storage
Get the current size of swaps charged for open positions on the account.
C++
double IMTAccount::Storage() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.Storage()  
---  
Return Value
The current size of swaps charged for open positions on the account.
IMTAccount::Storage
Set the current size of swaps charged for open positions on the account.
C++
MTAPIRES IMTAccount::Storage( const double storage // Swaps )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Storage( double  storage // Swaps )  
---  
Parameters
storage
[in] The size of swaps charged for open positions on the account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The swap of each open position is accumulated in the [IMTPosition::Storage](imtposition_storage.md "Storage") field. The total amount of swaps of all positions on the account is stored in IMTAccount::Storage. The swap is reflected on the balance after position closure. In this case, the value of IMTPosition::Storage is reset, and the appropriate amount of fixed swap is deducted from the value of IMTAccount::Storage. If only a part of the position is closed, the proportionate share of the swap is reflected on the balance.