package lt.techin.backend.resource;

import lombok.RequiredArgsConstructor;
import lt.techin.backend.model.entity.Ad;
import lt.techin.backend.services.AdService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/ads")
@RequiredArgsConstructor
public class AdResource {
    private final AdService adService;

    @PostMapping
    public ResponseEntity<Ad> createAd(@RequestBody Ad ad) {
        return ResponseEntity.created(URI.create("/ads/adID")).body(adService.createAd(ad));
    }

//    @DeleteMapping("/{id}")
//    ResponseEntity<Ad> deleteAd(@PathVariable(value = "id") String id){
//        ResponseEntity.(adService.deleteAd(id));
//    }

    @GetMapping
    public ResponseEntity<Page<Ad>> getAds(@RequestParam(value = "page", defaultValue = "0") int page,
                                           @RequestParam(value = "size", defaultValue = "10") int size) {
        return ResponseEntity.ok().body(adService.getAllAds(page, size));
    }

    @GetMapping("/{id}")
    public  ResponseEntity<Ad> getAds(@PathVariable(value = "id") String id) {
        return ResponseEntity.ok().body(adService.getAd(id));
    }
}
