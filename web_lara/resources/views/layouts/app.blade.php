<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">

        <link rel="stylesheet" href="{{asset('css\index.css')}}">
        <link rel="stylesheet" media="screen and (min-width: 320px) and (max-width: 426px)" href="{{asset('css/min-device.css')}}" />
        <script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="{{asset('js/app.js')}}"></script>  
        <script src='{{asset('js/btn.js')}}'></script>
        <title>{{config('app.name','CakeApache')}}</title>
      
    </head>
    <body id='main-page'>
        @include('inc.navbar')

        <div class='sight-part' id='intro'>
          <div class='name-part' id='intro-name'>Intro</div>
          @yield('intro')
        </div>
      
        <div class='sight-part' id='about'>
          <div class='name-part' id='about-name'>About</div>
          @yield('about')
        </div>

        <div class='bg'>
            <div class='sight-part' id='works'>
                <div class='name-part' id='works-name'>Works</div>
                @yield('works')
            </div>
        </div>
    </body>
        <footer id='links'>
        
            <div class='name-part' id='link-name'>Links</div>
            @yield('links')
            <div id='bottom-element'>2019&copy;CopyRight</div>
         </footer>
</html>
      
      