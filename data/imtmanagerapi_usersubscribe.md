# UserSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserSubscribe | [](imtmanagerapi_usercreateaccountarray.md "UserCreateAccountArray") [](imtmanagerapi_userunsubscribe.md "UserUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserSubscribe
Subscribe to events associated with changes in the client base.
C++
MTAPIRES IMTManagerAPI::UserSubscribe( IMTUserSink* sink // A pointer to the IMTUserSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.UserSubscribe( CIMTUserSink obj // CIMTUserSink object )  
---  
Python
ManagerAPI.UserSubscribe( sink # IMTUserSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTUserSink](imtusersink.md "IMTUserSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTUserSink](imtusersink.md "IMTUserSink") cannot subscribe to events twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTUserSink::OnUserSync](imtusersink_onusersync.md "OnUserSync") events, subscribe before calling the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::UserUnsubscribe](imtmanagerapi_userunsubscribe.md "UserUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
To receive events connected with user database changes, the pumping mode [IMTManagerAPI::PUMP_MODE_USERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") must be enabled.