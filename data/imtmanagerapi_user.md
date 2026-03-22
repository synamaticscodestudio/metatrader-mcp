# User Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface")/ Users | [](imtmanagerapi_attachmentrequest.md "AttachmentRequest") [](imtmanagerapi_user_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

User Functions
Functions allow managing the server database of users and their access to the trading platform, as well subscribe and unsubscribe from events associated with changes in the user base.
The following functions for managing users are available:
| Functions | Purpose |
| --- | --- |
| --- | --- |
| [UserCreate](imtmanagerapi_usercreate.md "UserCreate") | Create an object of a client record. |
| [UserCreateArray](imtmanagerapi_usercreatearray.md "UserCreateArray") | Create an object of an array of client records. |
| [UserCreateAccount](imtmanagerapi_usercreateaccount.md "UserCreateAccount") | Create an object of a client's trading account. |
| [UserCreateAccountArray](imtmanagerapi_usercreateaccountarray.md "UserCreateAccountArray") | Create an object of an array trading accounts. |
| [UserSubscribe](imtmanagerapi_usersubscribe.md "UserSubscribe") | Subscribe to events associated with changes in the client base. |
| [UserUnsubscribe](imtmanagerapi_userunsubscribe.md "UserUnsubscribe") | Unsubscribe from events associated with changes in the client base. |
| [UserAdd](imtmanagerapi_useradd.md "UserAdd") | Add a client record. |
| [UserDelete](imtmanagerapi_userdelete.md "UserDelete") | Delete a client record. |
| [UserDeleteBatch](imtmanagerapi_userdeletebatch.md "UserDeleteBatch") | Delete multiple accounts. |
| [UserUpdate](imtmanagerapi_userupdate.md "UserUpdate") | Update a client record. |
| [UserUpdateBatch](imtmanagerapi_userupdatebatch.md "UserUpdateBatch") | Update multiple accounts. |
| [UserUpdateBatchArray](imtmanagerapi_userupdatebatcharray.md "UserUpdateBatchArray") | Update multiple accounts. |
| [UserTotal](imtmanagerapi_usertotal.md "UserTotal") | Get the total number of users on a trade server. |
| [UserGet](imtmanagerapi_userget.md "UserGet") | Get a client record by the login. |
| [UserGetByGroup](imtmanagerapi_usergetbygroup.md "UserGetByGroup") | Get accounts by one or more groups. |
| [UserGetByLogins](imtmanagerapi_usergetbylogins.md "UserRequestByLogins") | Get accounts by the list of logins. |
| [UserRequest](imtmanagerapi_userrequest.md "UserRequest") | Request a client record by the login from a server. |
| [UserRequestArray](imtmanagerapi_userrequestarray.md "UserRequestArray") | Request an array of client records by the group name. |
| [UserRequestByLogins](imtmanagerapi_userrequestbylogins.md "UserRequestByLogins") | Request accounts from the server by a list of logins. |
| [UserGroup](imtmanagerapi_usergroup.md "UserGroup") | Get the group of a client by the login. |
| [UserLogins](imtmanagerapi_userlogins.md "UserLogins") | Returns an array of logins of the clients who are included in the specified group. |
| [UserPasswordCheck](imtmanagerapi_userpasswordcheck.md "UserPasswordCheck") | Check the user's password. |
| [UserPasswordChange](imtmanagerapi_userpasswordchange.md "UserPasswordChange") | Change the user's password. |
| [UserCertCreate](imtmanagerapi_usercertcreate.md "UserCertCreate") | Create an object of a certificate. |
| [UserCertUpdate](imtmanagerapi_usercertupdate.md "UserCertUpdate") | Add or update a client certificate. |
| [UserCertGet](imtmanagerapi_usercertget.md "UserCertGet") | Get the certificate of a client by the login. |
| [UserCertDelete](imtmanagerapi_usercertdelete.md "UserCertDelete") | Reset the user certificate. |
| [UserCertConfirm](imtmanagerapi_usercertconfirm.md "UserCertConfirm") | Confirm the user certificate. |
| [UserAccountSubscribe](imtmanagerapi_useraccountsubscribe.md "UserAccountSubscribe") | Subscribe to receive events related to changes in the account trading state. |
| [UserAccountUnsubscribe](imtmanagerapi_useraccountunsubscribe.md "UserAccountUnsubscribe") | Unsubscribe from the events related to changes in the account trading state. |
| [UserAccountGet](imtmanagerapi_useraccountget.md "UserAccountGet") | Get client trading account by a login. |
| [UserAccountGetByGroup](imtmanagerapi_useraccountgetbygroup.md "UserAccountGetByGroup") | Get trading accounts for one or several groups. |
| [UserAccountGetByLogins](imtmanagerapi_useraccountgetbylogins.md "UserAccountGetByLogins") | Get trading accounts for a list of logins. |
| [UserAccountRequest](imtmanagerapi_useraccountrequest.md "UserAccountRequest") | Request a client's account trade order from a server by the ticket. |
| [UserAccountRequestByLogins](imtmanagerapi_useraccountrequestbylogins.md "UserAccountRequestByLogins") | Request accounts' trading statuses from the server by a list of logins. |
| [UserAccountRequestArray](imtmanagerapi_useraccountrequestarray.md "UserAccountRequestArray") | Request an array of trade accounts from a server by the group name. |
| [UserExternalGet](imtmanagerapi_userexternalget.md "UserExternalGet") | Get a client record by the [gateway identifier](imtcongateway_id.md "ID") and/or the [account number in an external trading system](imtuser_externalaccountget.md "ExternalAccountGet"). |
| [UserExternalRequest](imtmanagerapi_userexternalrequest.md "UserExternalRequest") | Request a client record from a server by the [gateway identifier](imtcongateway_id.md "ID") and/or the [account number in an external trading system](imtuser_externalaccountget.md "ExternalAccountGet"). |
| [UserExternalSync](imtmanagerapi_userexternalsync.md "UserExternalSync") | Synchronizing client's trading status with an external trading system. |
| [UserBalanceCheck](imtmanagerapi_userbalancecheck.md "UserBalanceCheck") | Check and adjust a client's balance and credit assets. |
| [UserBalanceCheckBatch](imtmanagerapi_userbalancecheckbatch.md "UserBalanceCheckBatch") | Check and adjust balance and credit funds for multiple clients. |
| [NotificationsSend](imtmanagerapi_notificationssend.md "NotificationsSend") | Sends push notifications to mobile devices. |
| [EmailSend](imtmanagerapi_emailsend.md "EmailSend") | Send an email to a selected address. |
| [MessengerVerifyPhone](imtmanagerapi_messengerverifyphone.md "MessengerVerifyPhone") | Verify the validity of a passed phone number based on local phone number formation rules. |
| [MessengerSend](imtmanagerapi_messengersend.md "MessengerSend") | Send an SMS message. |