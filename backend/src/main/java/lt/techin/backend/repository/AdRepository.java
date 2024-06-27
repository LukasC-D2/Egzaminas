package lt.techin.backend.repository;

import lt.techin.backend.model.entity.Ad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdRepository extends JpaRepository<Ad, String> {
    Optional<Ad> findById(String id);
}
