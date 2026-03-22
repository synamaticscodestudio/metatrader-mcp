# UserAccountUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserAccountUnsubscribe | [](imtmanagerapi_useraccountsubscribe.md "UserAccountSubscribe") [](imtmanagerapi_useraccountget.md "UserAccountGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserAccountUnsubscribe
Unsubscribe from the events related to changes in the account trading state.
C++
MTAPIRES IMTManagerAPI::UserAccountUnsubscribe( IMTAccountSink* sink // A pointer to the IMTAccountSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.UserAccountUnsubscribe( CIMTAccountSink obj // the CIMTAccountSink object )  
---  
Python
ManagerAPI.UserAccountUnsubscribe( sink # IMTAccountSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTAccountSink](imtaccountsink.md "IMTAccountSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is paired with [IMTManagerAPI::UserAccountSubscribe](imtmanagerapi_useraccountsubscribe.md "UserAccountSubscribe"). If an attempt is made to unsubscribe from the interface that has not been previously subscribed to, the [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.