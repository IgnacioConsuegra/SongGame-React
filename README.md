Hi there.
This is a basic react game i made, just because.
Controls : z,x,c;

How this work ?

Well in the first version i made, our rows components use a time state that came from our mainPage; it just use a context.
So when our time updates, something happens in our row component. I think it was something like :
"Hey our first circles middleAt === time ? Then delete and update all our circles positions."
Or something like that, I don't remember. Go to this project;s first commits if you want to know.

This last version is quite simple.
In our mainPage component, we define when we want our circles to be in the middle position.
We make a few calculations, and we pass this to our row components as a props.
In each row component we have a timer state, that update itself by 0.1 every 1/10 seconds.
Every update it checks if our circles... Actually, just read the code, it's not really a big deal.

By the way, there is a MusicPlayer component. If you want to use it, do it. It works, but because i just needed and audio tag, i just made this work with that. I simply created the component, in case I needed it in the future.

Main difficulties:
My biggest problem was our time state, because changing states is async this result problems in our circle position.
