# Account Registration Process (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ Examples ](php_examples.md "Examples") / [ Web Registration ](php_web_registration.md "Web Registration")/ Account Registration Process | [](php_web_registration_install.md "Setup") [](php_extension.md "Protocol Extension") |
| --- | --- | --- |
| --- | --- |

Account Registration Process
The process of Web registration of accounts consists of the following steps:
  * User fills in required data.
  * After a user clicks the Register button, the specified data are checked.
  * If the data are correct, an email with the confirmation request is sent to the user. Based on the data specified by the user in the form, a special activation key is generated. This key is sent in the confirmation email in the form of a link.
  * After the user follows the link, a request to register a trade account is sent to the server.
  * If an account is successfully created, the user is shown a page with a detailed information about the opened account.
