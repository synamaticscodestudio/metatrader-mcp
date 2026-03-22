# TradeInterestrate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ TradeInterestrate | [](imtcongroup_tradetransfermode.md "TradeTransferMode") [](imtcongroup_tradevirtualcredit.md "TradeVirtualCredit") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::TradeInterestrate
Get the annual interest rate on deposits of the group accounts.
C++
double IMTConGroup::TradeInterestrate() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroup.TradeInterestrate()  
---  
Python (Manager API)
MTConGroup.TradeInterestrate  
---  
Return Value
The annual interest rate on deposits of the group accounts.
IMTConGroup::TradeInterestrate
Set the annual interest rate on deposits of the group accounts.
C++
MTAPIRES IMTConGroup::TradeInterestrate( const double rate // Annual interest rate )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.TradeInterestrate( double rate // Annual interest rate )  
---  
Python (Manager API)
MTConGroup.TradeInterestrate  
---  
Parameters
rate
[in] The annual interest rate on deposits of the group accounts.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.