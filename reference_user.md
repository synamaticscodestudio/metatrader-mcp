# Users (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces")/ Users | [](imtattachmentarray_searchright.md "SearchRight") [](imtuser.md "IMTUser") |
| --- | --- | --- |
| --- | --- |

Users
The MetaTrader 5 API allows managing a client base on a trade server. Using the API, you can add or remove users, edit their data and handle events of changes in the client base.
An important feature of a client base is that users are bound to a certain trade server. Accordingly, an application can manage only those user accounts that belong to the same server, on which the manager account used for connection has been created.
The following user interfaces are available:
  * [IMTUser](imtuser.md "IMTUser") An interface that provides access to all the main user settings.
  * [IMTUserArray](imtuserarray.md "IMTUserArray") An interface for working with the arrays of users.
  * [IMTUserSink](imtusersink.md "IMTUserSink") An interface that contains handlers of events associated with changes in user settings.

To help you understand the purpose of interfaces intended for working with users, the below figure shows their compliance with the elements in MetaTrader 5 Administrator:
The following elements are shown above:
  1. [User login](imtuser_login.md "Login").
  2. [Username](imtuser_name.md "Name").
  3. [User group](imtuser_group.md "Group").
  4. [City of residence of a user](imtuser_city.md "City").
  5. [Email address of a user](imtuser_email.md "EMail").
  6. [The current balance of a user](imtuser_balance.md "Balance").
  7. A tab of personal information, such as [Company](imtuser_company.md "Company"), [City](imtuser_city.md "City"), [Phone number](imtuser_phone.md "Phone"), [Address](imtuser_address.md "Address") etc.
  8. A tab of security settings for [passwords](imtadminapi_userpasswordchange.md "UserPasswordChange") and [certificates](imtmanagerapi_usercertdelete.md "UserCertDelete").
  9. [The color of trade requests](imtuser_color.md "Color") of a user in the manager terminal.
  10. [Leverage](imtuser_leverage.md "Leverage").
  11. [User account in an external bank](imtuser_account.md "Account").
  12. [Agent account](imtuser_agent.md "Agent").
  13. [User permissions](imtuser_rights.md "Rights").
  14. [Client's accounts in external systems](imtuser_externalaccountadd.md "ExternalAccountAdd").
