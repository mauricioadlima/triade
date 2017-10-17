package br.com.triade.entrevista;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "entrevista", path = "entrevista")
public interface EntrevistaResource extends PagingAndSortingRepository<Entrevista, String> {

	Page<Entrevista> findByNome(@Param("nome") String nome, Pageable pageable);
}
