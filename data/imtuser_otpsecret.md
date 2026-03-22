# OTPSecret (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ OTPSecret | [](imtuser_passwordhash.md "PasswordHash") [](imtuser_leverage.md "Leverage") |
| --- | --- | --- |
| --- | --- |

IMTUser::OTPSecret
Get a secret key which links a trading account and a one-time password generator.
C++
LPCWSTR IMTUser::OTPSecret() const  
---  
.NET (Gateway/Manager API)
string CIMTUser.OTPSecret()  
---  
Return Value
If successful, it returns a pointer to a string with a comment to the client. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the string after the object removal (call of the [IMTUser::Release](imtuser_release.md "Release") method of this object), a copy of it should be created.
The key is a link between the account and the [one-time password generator](https://support.metaquotes.net/en/docs/mt5/platform/administrator/getting_started/server_connect/otp) it is bound to. The key is represented by a sequence of 16 characters generated based on the data about the device the MetaTrader 5 mobile platform is installed on. Fur further information about the secret key please read the [MetaTrader 5 Administrator Documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/account_edit#security).
IMTUser::OTPSecret
Set a secret key which links a trading account and a one-time password generator.
C++
MTAPIRES IMTUser::OTPSecret( LPCWSTR otp_secret // Secret key )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.OTPSecret( string otp_secret // Secret key )  
---  
Parameters
otp_secret
[in] Secret key.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum key length is limited to 64 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed down to this number of characters.
The key is a link between the account and the [one-time password generator](https://support.metaquotes.net/en/docs/mt5/platform/administrator/getting_started/server_connect/otp) it is bound to. The key is represented by a sequence of 16 characters generated based on the data about the device the MetaTrader 5 mobile platform is installed on. Fur further information about the secret key please read the [MetaTrader 5 Administrator Documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/account_edit#security).