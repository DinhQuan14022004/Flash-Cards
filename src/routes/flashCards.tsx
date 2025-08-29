import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import FlashCardLayout from "../layouts/flashCards";

export const flashCardRoute =createRoute({
    getParentRoute: () =>rootRoute,
    path:'/flash-cards',
    component: () => <FlashCardLayout />

})
