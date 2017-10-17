package br.com.triade.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperFactory {

	@Bean
	public ModelMapper create() {
		return new ModelMapper();
	}

}
