# UserCreateAccount (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserCreateAccount | [](imtmanagerapi_usercreatearray.md "UserCreateArray") [](imtmanagerapi_usercreateaccountarray.md "UserCreateAccountArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserCreateAccount
Create an object of a client's trading account.
C++
IMTAccount* IMTManagerAPI::UserCreateAccount()  
---  
.NET
CIMTAccount CIMTManagerAPI.UserCreateAccount()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTAccount](imtaccount.md "IMTAccount") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTAccount::Release](imtaccount_release.md "Release") method of this object.