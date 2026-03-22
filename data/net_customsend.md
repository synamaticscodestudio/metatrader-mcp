# CustomSend (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Custom Commands ](net_custom.md "Custom Commands")/ CustomSend | [](net_custom.md "Custom Commands") [](net_webtrader.md "WebTrader") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.CustomSend
Send a custom command to the server.
MTRetCode MT5WebAPI.CustomSend( string command, // Command Dictionary(string,string) parameters, // Parameter byte[] body, // Additional body out string answer // Server response )  
---  
Parameters
command
[in] A custom command.
parameters
[in] Array of parameters of the custom command.
body
[in] Additional body of the command.
answer
[out] Server response. Both a response command and an additional body can be returned in the response.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.