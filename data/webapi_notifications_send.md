# Send Push Notifications (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Send Push Notifications | [](webapi_user_backup_get.md "Get User from Backup") [](webapi_client.md "Clients") |
| --- | --- | --- |
| --- | --- |

Send Push Notifications
The request allows sending Push notifications to logins or MetaQuotes IDs from a list.
Request Format
GET /api/notification/send?login=logins&text=message GET /api/notification/send?mq_id=IDs&text=message POST /api/notification/send?login=logins&text=message POST /api/notification/send?mq_id=IDs&text=message  
---  
Response Format
{ "retcode" : "code description", "answer" : [ logins ] }  
---  
Example
//--- request to the server GET /api/notification/send?login=1030,1031&text=hello //--- server response { "retcode" : "0 Done", "answer" : [1030,1031] }  
---  
Request Parameters
  * login — the list of user logins to which the message will be sent. For successful sending, MetaQuotes IDs of the specified account must be filled, as this ID serves as the recipient identifier.
  * mq_id — the list of MetaQuotes IDs to which the message will be sent.
  * text — message text, the max length is 1024 characters.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — the list of logins to which the messages were actually sent.

Note
  * Push notifications are personal messages sent over the Internet. They do not depend on the phone number or mobile network operator. Messages are delivered instantly; no need to run any applications on the receiver's device.
  * Messages are sent based on MetaQuotes ID, which is a unique user identifier. To obtain the ID, the user needs to install MetaTrader 5 Mobile for iPhone or Android.
  * The message length is limited to 1024 characters.
  * When sending messages to a list of MetaQuotes IDs, the company name from the Server License will be specified in the signature.
  * If you send messages specifying logins, the signature will contain the name of the Owner company from the settings of the group, to which the accounts belong. Use this type for White Labels to add the correct company name in the signature.
  * When sending the message, it is checked whether the manager account used for the Web API has access rights to the corresponding users. If the account does not has such permissions, the messages will not be sent.
