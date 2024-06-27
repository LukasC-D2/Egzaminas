package lt.techin.backend.services;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import lt.techin.backend.model.entity.Ad;
import lt.techin.backend.repository.AdRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class AdService {
    private final AdRepository adRepository;

    public Page<Ad> getAllAds(int page, int size) {
        return adRepository.findAll(PageRequest.of(page, size, Sort.by("title")));
    }

    public Ad getAd(String id) {
        return adRepository.findById(id).orElseThrow(() -> new RuntimeException("Ad not found"));
    }

    public Ad createAd(Ad ad) {
        return adRepository.save(ad);
    }

    public void deleteAd(String id) {
        adRepository.deleteById(id);
    }
}
