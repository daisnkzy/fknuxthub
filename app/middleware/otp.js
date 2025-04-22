export default defineNuxtRouteMiddleware(to => {
  if (!to.query.email) {
    return navigateTo("/auth/login");
  }
});
