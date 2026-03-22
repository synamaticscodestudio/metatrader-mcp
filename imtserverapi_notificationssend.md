# NotificationsSend (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ NotificationsSend | [](imtserverapi_userrestore.md "UserRestore") [](imtserverapi_useraccountget.md "UserAccountGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NotificationsSend
Sends push-notifications to a list of MetaQuotes IDs.
MTAPIRES IMTServerAPI::NotificationsSend( LPCWSTR metaquotest_ids, // The list of MetaQuotes IDs LPCWSTR message // Message )  
---  
Parameters
metaquotes_ids
[in] A comma separated list of MetaQuotes IDs.
message
[in] The text of the notification.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Push notifications are personal messages sent over the Internet. They do not depend on the phone number or mobile network operator. Messages are delivered instantly; no need to run any applications on the receiver's device.
Messages are sent based on MetaQuotes ID, which is a unique user identifier. To obtain the ID, a user needs to install MetaTrader 5 Mobile for iPhone or Android.
The maximum message length is 1024 characters.
When sending to a list of MetaQuotes IDs, the company name from the Server License will be specified in the signature.
IMTServerAPI::NotificationsSend
Sends push-notifications to a list of logins.
MTAPIRES IMTServerAPI::NotificationsSend( const UINT64* logins, // Logins const UNIT logins_total, // Number of logins LPCWSTR message // Message )  
---  
Parameters
logins
[in] An array of logins.
logins_total
[in] The total number of logins in logins.
message
[in] The text of the notification.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Push notifications are personal messages sent over the Internet. They do not depend on the phone number or mobile network operator. Messages are delivered instantly; no need to run any applications on the receiver's device.
Messages are sent based on MetaQuotes ID, which is a unique user identifier. To obtain the ID, a user needs to install MetaTrader 5 Mobile for iPhone or Android.
The maximum message length is 1024 characters.
MetaQuotes ID must be specified in the settings of appropriate accounts ([IMTUser::MQID](imtuser_mqid.md "MQID")) in order to send messages by specifying logins.
If you send messages specifying logins, the signature will contain the name of the Owner company from the settings of the group, to which the accounts belong. Use this type for White Labels to add the correct company name in the signature.