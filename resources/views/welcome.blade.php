<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Русский праздник</title>
        <script type="text/javascript">
            window.csrfToken = '{{ csrf_token() }}';
        </script>
        <!-- <script>
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                    navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
                        console.log('Service worker successfully registered on scope', registration.scope);
                    }).catch(function (error) {
                        console.log('Service worker failed to register');
                    });
                });
            }
        </script> -->
        <script src="{{ asset('js/app.js') }}" defer></script>
        <!-- <link rel="manifest" href="/webmanifest.json">  -->
        <!-- Yandex.Metrika counter -->
        <!-- <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(73558078, "init", {
                defer: true,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
        });
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/73558078" style="position:absolute; left:-9999px;" alt="" /></div></noscript> -->
        <!-- /Yandex.Metrika counter -->
        
    </head>
    <body class="antialiased">
        <div id="root"></div>
    </body>
</html>
