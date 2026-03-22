# BookDepthLimit (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ BookDepthLimit | [](imtcongroupsymbol_permissionsflags.md "PermissionsFlags") [](imtcongrouparray.md "IMTConGroupArray") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::BookDepthLimit
Get a limit on the number of orders in the Market Depth window displayed for this particular group.
C++
UINT IMTConSymbol::BookDepthLimit() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.BookDepthLimit()  
---  
Python (Manager API)
MTConSymbol.BookDepthLimit  
---  
Return Value
The number of orders in the Market Depth window allowed for this group. The value of 0 means that the depth limit corresponds to appropriate symbol settings ([IMTConSymbol::TickBookDepth](imtconsymbol_tickbookdepth.md "TickBookDepth")).
IMTConSymbol::BookDepthLimit
Set a limit on the number of orders in the Market Depth window displayed for this particular group.
C++
MTAPIRES IMTConSymbol::BookDepthLimit( const UINT depth // Depth value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.BookDepthLimit( uint depth // Depth value )  
---  
Python (Manager API)
MTConSymbol.BookDepthLimit  
---  
Parameters
depth
[in] The number of orders in the Market Depth window allowed for this group. The value of 0 means that the depth limit corresponds to appropriate symbol settings ([IMTConSymbol::TickBookDepth](imtconsymbol_tickbookdepth.md "TickBookDepth")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.