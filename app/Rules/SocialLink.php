<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class SocialLink implements Rule {
    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value) {
        if (empty($value)) {
            return true;
        }
        else {
            if (filter_var($value, FILTER_VALIDATE_URL)) {
                return true;
            }
            return false;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message() {
        return 'Please provide a valid url.';
    }
}
