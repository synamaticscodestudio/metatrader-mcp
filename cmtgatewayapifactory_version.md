# Version (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ CMTGatewayAPIFactory ](cmtgatewayapifactory.md "CMTGatewayAPIFactory")/ Version | [](cmtgatewayapifactory_licensecheck.md "LicenseCheck") [](imtgatewayapi.md "Main Interface") |
| --- | --- | --- |
| --- | --- |

CMTGatewayAPIFactory::Version
Get the version of the loaded Gateway API library.
C++
MTAPIRES CMTGatewayAPIFactory::Version( UINT& version // Gateway API version )  
---  
.NET
MTRetCode SMTGatewayAPIFactory.GetVersion( out uint version // Gateway API version )  
---  
Parameters
version
[in] The version of the loaded Gateway API library.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.