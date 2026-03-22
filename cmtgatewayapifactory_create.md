# Create (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ CMTGatewayAPIFactory ](cmtgatewayapifactory.md "CMTGatewayAPIFactory")/ Create | [](cmtgatewayapifactory_shutdown.md "Shutdown") [](cmtgatewayapifactory_licensecheck.md "LicenseCheck") |
| --- | --- | --- |
| --- | --- |

CMTGatewayAPIFactory::Create
Create an instance of the [IMTGatewayAPI](imtgatewayapi.md "Main Interface") interface.
C++
MTAPIRES CMTGatewayAPIFactory::Create( MTGatewayInfo& info, // The MTGatewayInfo structure IMTGatewayAPI** gateway, // A pointer to the pointer to the API interface int argc=0, // The number of command line parameters wchar_t** argv=NULL // Command line parameters )  
---  
.NET
CIMTGatewayAPI SMTGatewayAPIFactory.CreateGateway( MTGatewayInfo info, // The MTGatewayInfo structure string[] arguments, // Command line parameters out MTRetCode res // Response code )  
---  
Parameters
info
[in] The [MTGatewayInfo](mtgatewayinfo.md "MTGatewayInfo") structure that describes the parameters of the gateway/data feed module.
gateway
[out] A pointer to a pointer to the created instance of the [IMTGatewayAPI](imtgatewayapi.md "Main Interface") interface.
argc=0
[in] The number of additional parameters of a command line that is used for running the gateway/data feed. The default value is 0.
argv=NULL
[in] Additional parameters of the command line that is used for running the gateway/data feed. The default value is NULL.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Gateways/data feeds support the launch with the [additional command line parameters](mtgatewaycreatelocal.htm#param). In particular, the /description command line parameter is additionally used by the history server to get the description of the gateway/data feed module. Always pass the command line parameters to the CMTGatewayAPIFactory::Create method, so that the module is correctly downloaded and managed by the history server.
When an IMTGatewayAPI instance is created using the CMTGatewayAPIFactory::Create method, it is expected that the Gateway API will receive an address and name to start the gateway:
  * in command line parameters passed to CMTGatewayAPIFactory::Create (/name:XXX /address:XXX), or
  * in the [configuration file](https://support.metaquotes.net/ru/docs/mt5/platform/administration/admin_gateways/gateway_service#config) (name=XXX, address=XXX)

If the Gateway API cannot find the parameters in any of these ways, CMTGatewayAPIFactory::Create will return [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors").
If login and password are not specified in the command line, it will be impossible to connect to the gateway until it adds authentication data using [IMTGatewayAPI::ClientAdd](imtgatewayapi_clientadd.md "ClientAdd").