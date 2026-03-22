# MailSend (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Mail Database ](serverapi_mail.md "Mail Database")/ MailSend | [](imtserverapi_mailunsubscribe.md "MailUnsubscribe") [](serverapi_news.md "News Database") |
| --- | --- | --- |
| --- | --- |

IMTServeAPI::MailSend
Send emails via the internal mail system.
MTAPIRES IMTServerAPI::MailSend( IMTMail* mail // Mail object )  
---  
Parameters
mail
[in] An object of the email.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Before sending an email, its correctness is checked (presence of its [subject](imtmail_subject.md "Subject"), [recipient](imtmail_to.md "To") and [sender](imtmail_from.md "From")).
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
