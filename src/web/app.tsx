import CookieConsent from "@/components/CookieConsent";
import BlogIndexPage from "@/pages/BlogIndexPage";
import BlogPostPage from "@/pages/BlogPostPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import { Route, Switch } from "wouter";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/blog" component={BlogIndexPage} />
        <Route path="/blog/:slug">
          {(params) => <BlogPostPage slug={params.slug} />}
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
      <CookieConsent />
    </>
  );
}
