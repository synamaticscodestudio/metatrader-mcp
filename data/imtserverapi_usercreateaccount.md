# UserCreateAccount (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserCreateAccount | [](imtserverapi_usercreate.md "UserCreate") [](imtserverapi_usersubscribe.md "UserSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserCreateAccount
Create an object of a client's trading account.
IMTAccount* IMTServerAPI::UserCreateAccount()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTAccount](imtaccount.md "IMTAccount") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTAccount::Release](imtaccount_release.md "Release") method of this object.