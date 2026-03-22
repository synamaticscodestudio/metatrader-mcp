# MailMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ MailMode | [](imtcongroup_newslangnext.md "NewsLangNext") [](imtcongroup_tradeflags.md "TradeFlags") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::MailMode
Get the mode of operation of the internal mail system for the group.
C++
UINT IMTConGroup::MailMode() const  
---  
.NET (Gateway/Manager API)
EnMailMode CIMTConGroup.MailMode()  
---  
Python (Manager API)
MTConGroup.MailMode  
---  
Return Value
A value from the [IMTConGroup::EnMailMode](imtcongroup_enum.htm#enmailmode) enumeration.
IMTConGroup::MailMode
Set the mode of operation of the internal mail system for the group.
C++
MTAPIRES IMTConGroup::MailMode( const UINT mode // Email operation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.MailMode( EnMailMode mode // Email operation mode )  
---  
Python (Manager API)
MTConGroup.MailMode  
---  
Parameters
mode
[in] To set the mode of operation of the internal mail system, the [IMTConGroup::EnMailMode](imtcongroup_enum.htm#enmailmode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.