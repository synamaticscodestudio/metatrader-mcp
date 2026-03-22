# Liabilities (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Liabilities | [](imtaccount_assets.md "Assets") [](imtaccountarray.md "IMTAccountArray") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Liabilities
Get the current total amount of liabilities on a trading account.
C++
double IMTAccount::Liabilities() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.Liabilities()  
---  
Return Value
The current total amount of liabilities on a trading account.
Note
Used in the exchange risk management model ([IMTConGroup::MARGIN_MODE_EXCHANGE_DISCOUNT](imtcongroup_enum.htm#enmarginmode)).
IMTAccount::Assets
Set the current total amount of liabilities on a trading account.
C++
MTAPIRES IMTAccount::Liabilities( const double liabilities // Total liabilities )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Liabilities( double liabilities // Total liabilities )  
---  
Parameters
liabilities
[in] The current total amount of liabilities on a trading account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Used in the exchange risk management model ([IMTConGroup::MARGIN_MODE_EXCHANGE_DISCOUNT](imtcongroup_enum.htm#enmarginmode)).