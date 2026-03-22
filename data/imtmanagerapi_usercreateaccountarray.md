# UserCreateAccountArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserCreateAccountArray | [](imtmanagerapi_usercreateaccount.md "UserCreateAccount") [](imtmanagerapi_usersubscribe.md "UserSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserCreateAccountArray
Create an object of an array trading accounts.
C++
IMTAccountArray* IMTManagerAPI::UserCreateAccountArray()  
---  
.NET
CIMTAccountArray CIMTManagerAPI.UserCreateAccountArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTAccountArray](imtaccountarray.md "IMTAccountArray") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTAccountArray::Release](imtaccountarray_release.md "Release") method of this object.