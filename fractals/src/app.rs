use yew::prelude::*;

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <main>
            <img class="logo" src="./src/under_construction.jpg" alt="under construction sign" />
            <h1>{ "under construction" }</h1>
            <span class="subtitle">{ "<3" }<i class="heart" /></span>
        </main>
    }
}
