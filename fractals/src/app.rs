use yew::prelude::*;

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <main>
            <img class="logo" src="https://yew.rs/img/logo.png" alt="Yew logo" />
            <h1>{ "uhhhh" }</h1>
            <span class="subtitle">{ "<3" }<i class="heart" /></span>
        </main>
    }
}
