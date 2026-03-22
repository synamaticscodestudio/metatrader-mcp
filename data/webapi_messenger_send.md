# Send Message (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Messengers ](webapi_messenger.md "Messengers")/ Send Message | [](webapi_messenger_get_all.md "Get All") [](webapi_gateway.md "Gateways") |
| --- | --- | --- |
| --- | --- |

Send Message
The request allows sending SMS messages to clients.
Request Format
GET /api/messenger/send?to=phone&from=sender&group=group&text=message  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/messenger/send?to=+1227122999&from=abcbroker&group=demoforex&text=hello //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * to — recipient's phone number in the format of +[country code][number], example: +15415553594. The number is indicated without spaces.
  * from — message sender name. It is only used if the appropriate function is supported by the provider. The parameter is optional.
  * group — the parameter can be used to specify the group to which the message recipient's account belongs. In this case, the platform will send the message using the first provider, who holds the settings of the specified group. The parameter is optional: if it is not specified, the provider will be selected without regard to the group.
  * text — message text. The maximum allowable length depends on the provider.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * To be able to send emails, the platform must have pre-configured messengers.
  * Response code [14000](retcodes_messenger.md "Messengers") means that the specified phone number is invalid.
  * Response code [14001](retcodes_messenger.md "Messengers") means that a landline phone number is specified instead of a mobile phone number.
