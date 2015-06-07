<?php 

echo '
{
    "error": "1",
    "info": [
        {
            "fieldId": "contact-send"
        },
        {
            "fieldId": "contact-message",
            "message": "Сообщение не может быть отправлено!"
        },
        {
            "fieldId": "contact-user-name",
            ' + //"message": "Ваше имя"
            '
        },
        {
            "fieldId": "contact-user-email",
            ' + //"message": "Ваш E-mail" 
	    '
        }
    ]
}
';
?>