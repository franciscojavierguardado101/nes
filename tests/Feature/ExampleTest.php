<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExampleTest extends TestCase {
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest() {
        $response = $this->post('/login', ['email' => 'jaren.renner@example.net', 'password' => 'password']);
        dd($response);
        $response->assertStatus(200);
    }
}
