# Initialize (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ CMTGatewayAPIFactory ](cmtgatewayapifactory.md "CMTGatewayAPIFactory")/ Initialize | [](cmtgatewayapifactory.md "CMTGatewayAPIFactory") [](cmtgatewayapifactory_shutdown.md "Shutdown") |
| --- | --- | --- |
| --- | --- |

CMTGatewayAPIFactory::Initialize
Loading of Gateway API library and all [functions exported by it](gatewayapi_exported.md "Exported Functions").
C++
MTAPIRES CMTGatewayAPIFactory::Initialize()  
---  
.NET
MTRetCode SMTGatewayAPIFactory.Initialize()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method determines the application bitness (32 or 64-bit) and loads an appropriate library.
The library search is performed in the following order:
  * In the directory where the application executable is located.
  * In the parent directory, then in the next upper-level directory and so on, up to five levels up from the executable files directory.
  * Using the path from the system PATH variable.
