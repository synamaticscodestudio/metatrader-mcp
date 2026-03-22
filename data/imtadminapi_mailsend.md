# MailSend (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Mail Database ](imtadminapi_mail.md "Functions")/ MailSend | [](imtadminapi_maildeleteid.md "MailDeleteId") [](imtadminapi_mailbodyrequest.md "MailBodyRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MailSend
Send emails via the internal mail system.
C++
MTAPIRES IMTAdminAPI::MailSend( IMTMail* mail // Mail object )  
---  
.NET
MTRetCode CIMTAdminAPI.MailSend( CIMTMail mail // Mail object )  
---  
Python
AdminAPI.MailSend( MTMail mail // Mail object )  
---  
Parameters
mail
[in] Mail object. The mail object must be first created using the [IMTAdminAPI::MailCreate](imtadminapi_mailcreate.md "MailCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Before sending an email, its correctness is checked (presence of its [subject](imtmail_subject.md "Subject") and [recipient](imtmail_to.md "To")). [Sender](imtmail_from.md "From") field is automatically filled with the login of the manager account, which is used by the Manager API application to connect to the server.
You can use macros in the email body, which allow substituting relevant data depending on the email recipient:
  * #LOGIN# — the email recipient's account number.
  * #USERNAME# — the email recipient's name.
  * #CURRENCY# — the email recipient's deposit currency.
  * #BALANCE# — the email recipient's current balance.
  * #CREDIT# — the recipient's credit amount.
  * #EQUITY# — the current equity amount on the recipient's account.
  * #MARGIN# — the amount of funds required to cover current open positions.
  * #MARGIN_FREE# — the free margin amount.
  * #MARGIN_LEVEL# — the percent ratio of required margin and account equity.

  * #LEVERAGE# — the recipient's current leverage amount.
