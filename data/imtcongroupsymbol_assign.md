# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ Assign | [](imtcongroupsymbol_release.md "Release") [](imtcongroupsymbol_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConGroupSymbol::Assign( const IMTConGroupSymbol* group // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.Assign( CIMTConGroupSymbol group // Source object )  
---  
Parameters
group
Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.