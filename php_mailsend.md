# MailSend (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Mailbox ](php_mail.md "Mailbox")/ MailSend | [](php_mail.md "Mailbox") [](php_news.md "News Event") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::MailSend
Send mails via the internal mailing system of the trading platform.
MTAPIRES MTWebAPI::MailSend( string $to, // Recipients string $subject, // Subject string $text // Message text )  
---  
Parameters
$to
[in] The login of the email recipient. You may use the mask "*" as well as specify login ranges in this parameter. For example:
  * TO=* — the mail will be sent to all clients
  * TO=demo*,preliminary — the mail will be sent to all clients from groups "demo" and "preliminary".
  * TO=100-250,5000-7500 — the mail will be sent to all clients from groups "demo" and "preliminary".

$subject
[in] Subject of an email.
$text
[in] Mail body. You may use HTML to format mails.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The strings specifying the recipients, the subject and the mail body must be passed in the UTF-8 format.
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
