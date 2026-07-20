package com.gamevault.gamevault.controller;

import com.gamevault.gamevault.model.Game;
import com.gamevault.gamevault.repository.GameRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/games")
@CrossOrigin(origins = "*")
public class GameController {

    private final GameRepository gameRepository;

    public GameController(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @GetMapping
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    @PostMapping
    public Game addGame(@RequestBody Game game) {
        return gameRepository.save(game);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGame(@PathVariable Long id) {

        if (!gameRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        gameRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}