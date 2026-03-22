# CustomSend (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Custom Commands ](php_custom.md "Custom Commands")/ CustomSend | [](php_custom.md "Custom Commands") [](php_examples.md "Examples") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::CustomSend
Send a custom command to the server.
MTAPIRES MTWebAPI::CustomSend( string $command, // Command array(string,string) $params, // Parameters string $body, // Additional body array(string,string) &$answer, // Response command string &$answer_body // Additional body of the response )  
---  
Parameters
$command
[in] A custom command.
$params
[in] Array of parameters of the custom command. For example:
  * $params[PARAM1] = VALUE1;
  * $params[PARAM2] = VALUE2;

$body
[in] Additional body of the command.
$&answer
[out] Array of parameters of the command of the server answer. For example:
  * $answer[PARAM1] = VALUE1;
  * $answer[PARAM2] = VALUE2;

$&answer_body
[out] Additional body of the server answer.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The strings specifying the command and the additional body must be passed in the UTF-8 format.