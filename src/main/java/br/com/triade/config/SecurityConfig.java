package br.com.triade.config;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/**").permitAll();/*

		http.csrf()
			.disable()
			.authorizeRequests()
			.antMatchers("/resources/**")
			.permitAll()
			.anyRequest()
			.authenticated()
			.and()
			.formLogin()
			.loginPage("/login.html")
			.permitAll()
			.and()
			.logout()
			.permitAll();*/
	}

	@Override
	protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
			.withUser("admin")
			.password("admin")
			.roles("ADMIN");
	}
}
