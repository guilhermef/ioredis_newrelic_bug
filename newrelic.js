/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['test app'],
  agent_enabled: true,
  /**
   * Your New Relic license key.
   */
  capture_params: true,
  license_key: 'can_be_a_free_license_key',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'warn',
    filepath: 'stdout'
  },
}