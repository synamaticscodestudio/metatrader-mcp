# UserAccountGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserAccountGet | [](imtserverapi_notificationssend.md "NotificationsSend") [](serverapi_online.md "Online Connections") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserAccountGet
Get client trading account by a login.
MTAPIRES IMTServerAPI::UserAccountGet( const UINT64 login, // Client login IMTAccount* account // An object of a trading account )  
---  
Parameters
login
[in] The login of a client.
account
[out] An object of a client trading account. The account object must be created using the [IMTServerAPI::UserCreateAccount](imtserverapi_usercreateaccount.md "UserCreateAccount") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
The state of a trade account can be received only in case it has open orders or positions or a trade activity has been detected at the account after the last server restart.
The method cannot be called from trade event handlers and hooks. For example, from [IMTDealSink::OnDealUpdate](imtdealsink_ondealupdate.md "OnDealUpdate").