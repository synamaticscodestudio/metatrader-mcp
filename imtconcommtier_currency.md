# Currency (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommTier ](imtconcommtier.md "IMTConCommTier")/ Currency | [](imtconcommtier_rangeto.md "RangeTo") [](config_leverage.md "Floating Margin") |
| --- | --- | --- |
| --- | --- |

IMTConCommTier::Currency
Gets commission calculation currency.
C++
LPCWSTR IMTConCommTier::Currency() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommTier.Currency()  
---  
Python (Manager API)
MTConCommTier.Currency  
---  
Return Value
The currency used for commission calculation.
Note
The currency has a three-letter representation, e.g. EUR, USD, JPY etc.
This field is only used in the [IMTConCommTier::COMM_MONEY_SEPCIFIED](imtconcommtier_enum.htm#encommissionmode) commission calculation mode.
IMTConCommTier::Currency
Gets commission calculation currency.
C++
MTAPIRES IMTConCommTier::Currency( LPCWSTR currency // Currency name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommTier.Currency( string currency // Currency name )  
---  
Python (Manager API)
MTConCommTier.Currency  
---  
Parameters
currency
[in] A three-letter representation of the currency, e.g. EUR, USD, JPY etc.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The currency has a three-letter representation, e.g. EUR, USD, JPY etc.
This field is only used in the [IMTConCommTier::COMM_MONEY_SEPCIFIED](imtconcommtier_enum.htm#encommissionmode) commission calculation mode.