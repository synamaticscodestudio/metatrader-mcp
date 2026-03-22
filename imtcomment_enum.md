# Enumerations (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ Enumerations | [](imtcomment.md "IMTComment") [](imtcomment_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTComment](imtcomment.md "IMTComment") interface contains the following enumerations:
  * [IMTComment::EnCommentFlags](imtcomment_enum.htm#encommentflags)
  * [IMTComment::EnCommentType](imtcomment_enum.htm#encommenttype)
  * [IMTComment::EnCommentResult](imtcomment_enum.htm#encommentresult)

IMTComment::EnCommentFlags
Comment flags are enumerated in IMTComment::EnCommentFlags:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| COMMENT_FLAG_DELETED | 0x1 | Comment was deleted. |
| COMMENT_FLAG_IMPORTANT | 0x2 | Comment is marked as important. |
| COMMENT_FLAG_NONE | 0 | No flags. |
| COMMENT_FLAG_ALL |  | All flags are set. |

The enumeration is used in the [IMTComment::Flags](imtcomment_flags.md "Flags") method.
IMTComment::EnCommentType
Types of comments are enumerated in IMTComment::EnCommentType:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| COMMENT_TYPE_UNDEFINED | 0 | The type is not defined. |
| COMMENT_TYPE_LOGRECORD | 1 | Journal based entry. |
| COMMENT_TYPE_CALLRECORD | 2 | Call based entry. |
| COMMENT_TYPE_ROBOTRECORD | 3 | Automatic entry. |
| COMMENT_TYPE_FIRST |  | Enumeration beginning. Corresponds to COMMENT_TYPE_UNDEFINED. |
| COMMENT_TYPE_LAST |  | End of enumerationing. Corresponds to COMMENT_TYPE_ROBOTRECORD. |

The enumeration is used in the [IMTComment::CommentType](imtcomment_commenttype.md "CommentType") method.
IMTComment::EnCommentResult
Possible results of calling to a client are enumerated in IMTComment::EnCommentResult:
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| COMMENT_RESULT_UNDEFINED | 0 | Undefined. |
| COMMENT_RESULT_CALL_NO_ANSWER | 1 | The call was not answered. |
| COMMENT_RESULT_CALL_WRONG_NUMBER | 2 | The phone number is incorrect. |
| COMMENT_RESULT_CALL_NOT_INTERESTED | 3 | The client is not interested in the offer. |
| COMMENT_RESULT_CALL_SUCCESSFUL | 4 | The call was successful, the client became interested. |
| COMMENT_RESULT_FIRST |  | Enumeration beginning. Corresponds to COMMENT_RESULT_UNDEFINED. |
| COMMENT_RESULT_LAST |  | End of enumerationing. Corresponds to COMMENT_RESULT_CALL_SUCCESSFUL. |

The enumeration is used in the [IMTComment::CommentResult](imtcomment_commentresult.md "CommentResult") method.