# 2° atividade de keyframes

nessa atividade foi feito um uma imagem de chatbot animada com **HTML** e **CSS** 


ultilizando o elemento **_keyframes_** e **_animation-delay_** do css para fazer a animação 


do **_translateY_** e do **_scale_**.


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>keyframes</title>
    
<style type="text/css">
    body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

.wrapper {
    height: 100vh;
    width: 100vw;
    background-color: rgb(53, 53, 53);
    display: flex;
    justify-content: center;
    align-items: center;
}

.chatbot {
    height: 4rem;
    width: 8rem;
    border-radius: 36px;
    border: 4px solid #949494;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    transform: translateY(0);
    animation: chatTranslate 2s ease-in-out infinite;
}

.chatbot::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -1.3rem;
    left: 2rem;
    border-left: 2px solid transparent;
    border-right: 17px solid transparent;
    border-top: 17px solid #949494;
}

.chatbot_loading {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #949494;
    transform: scale(1);
}

.chatbot_loading:nth-child(1) {
    animation: pulse 1.5s ease-in-out infinite;
}

.chatbot_loading:nth-child(2) {
    animation: pulse 1.5s ease-in-out infinite;
    animation-delay: 0.2s;
}

.chatbot_loading:nth-child(3) {
    animation: pulse 1.5s ease-in-out infinite;
    animation-delay: 0.4s;
}



@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes chatTranslate {
    0% {
        transform: translatey(0);
    }
    50% {
        transform: translatey(15px);
    }
    100% {
        transform: translatey(0);
    }
}
</style>
</head>
<body>
    <main class="wrapper">
        <div class="chatbot">
            <div class="chatbot_loading"></div>
            <div class="chatbot_loading"></div>
            <div class="chatbot_loading"></div>
        </div>
    </main>
</body>
</html>
