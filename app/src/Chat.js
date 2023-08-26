import './Chat.css';
import "react-chat-elements/dist/main.css"
import {Button, Input, MessageList} from "react-chat-elements";
import {useEffect, useRef, useState} from "react";

function Chat() {
    const [messages, setMessages] = useState([
        {
            position: "left",
            type: "text",
            title: "Помощник",
            text: "Добрый день!\n" +
                "Отвечу на все вопросы.",
        },
    ]);

    const inputRef = useRef();
    const messageListWrapperRef = useRef();

    useEffect(() => {
        messageListWrapperRef.current.scrollTo(0, messageListWrapperRef.current.scrollHeight);
    }, [messages]);

    const onResponseReceived = (message) => {
        setMessages((messages) => [
            ...messages,
            {
                position: "left",
                type: "text",
                title: "Помощник",
                text: message,
            },
        ]);
    }

    const onMessageSend = () => {
        const inputCurrentValue = inputRef.current.value;
        if ( !inputCurrentValue ) {
            return;
        }

        setMessages((messages) => [
            ...messages,
            {
                position: "right",
                type: "text",
                title: "Вы",
                text: inputCurrentValue,
            },
        ]);

        /*fetch('http://test.kagafonov.beget.tech',{
            method: 'post',
            body: JSON.stringify({
                message: inputRef.current.value,
            }),
        })*/
        fetch(`http://localhost:8000/question/${encodeURIComponent(inputCurrentValue)}` )
            .then((resp) => resp.json())
            .then((data) => onResponseReceived(data.message))
            .catch((error) => console.log(error));

        inputRef.current.value = '';
    }

    return (
        <div className="chat">
            <div
                className="messagelist-wrapper"
                ref={messageListWrapperRef}
            >
                <MessageList
                    className='message-list'
                    dataSource={messages}
                />
            </div>
            <Input
                placeholder="Type here..."
                multiline={true}
                maxHeight={200}
                rightButtons={<Button
                    text={">>>"}
                    onClick={() => onMessageSend()}
                    title=">>>"
                />}
                referance={inputRef}
            />
        </div>
    );
}

export default Chat;
