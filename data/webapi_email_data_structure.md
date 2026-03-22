# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Email ](webapi_email.md "Email")/ Data Structure | [](webapi_email.md "Email") [](webapi_email_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Data Structure
Mail server configuration is passed in JSON format in response to the [/api/email/add](webapi_email_add.md "Add"), [/api/email/next](webapi_email_next.md "Get by Index") and [/api/email/get](webapi_email_get.md "Get by Name") requests.
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Name | String | Mail server configuration name. |
| SenderMail | String | The email address, from which emails are sent via the mail server configurations. |
| SenderName | String | The sender name in the mail server configuration. |
| Server | String | The SMTP server address in the mail server configuration. |
| Login | String | The SMTP login in the mail server configuration. |
| Password | String | The SMTP password in the mail server configuration. |
| Flags | Integer | Advanced mail server settings. Passed using the [EnFlags](imtconemail_enum.htm#enflags) enumeration. |
| Stats | Array | [Information](webapi_email_data_structure.htm#statistics) about the mail server operation. |

Statistics
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| TotalSend | Integer | The number of emails sent. |
| TotalFailed | Integer | The number of unsent emails due to errors. |
| CurrentQueue | Integer | The number of emails waiting to be sent. |
| TimeMin | Integer | Minimum email sending time. |
| TimeMax | Integer | Maximum email sending time. |
| TimeAvg | Integer | Average email sending time. |